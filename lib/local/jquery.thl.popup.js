/**
 * Created by edwardjgarrett on 12/3/17.
 */

(function(a) {
    a.fn.thlPopup = function(b) {
        this.defaults = {
            id: false,
            header: "",
            content: "",
            footer: "",
            width: 590,
            height: 540,
            flexibleHeight: false,
            overflowX: "hidden",
            overflowY: "auto",
            padding: 0,
            url: false,
            linkUrl: false,
            showLink: true,
            newWindow: false,
            loadWith: "ajax",
            closeWith: "remove",
            useMainSiteForAjax: true,
            type: false,
            open: true
        };
        this.options = b = jQuery.extend(this.defaults, b);
        this.id = null;
        this.div = null;
        this.headerDiv = null;
        this.footerDiv = null;
        this.contentDiv = null;
        this.boxCreated = false;
        this.init = function() {
            this.options.linkUrl = this.options.linkUrl ? this.options.linkUrl : this.options.url;
            if (typeof(this.options.linkUrl) == "string" && (this.options.linkUrl).indexOf("mms.") > -1 && (this.options.linkUrl).indexOf(".jpg") > -1) {
                var c = (this.options.linkUrl).split("/");
                var d = c.pop();
                d = d.substr(0, d.indexOf("_"));
                this.options.linkUrl = window.location.pathname + "#iframe=http://mms.thlib.org/media_objects/" + d
            }
            if (this.options.url) {
                if (this.options.type == "wiki") {
                    this.options.linkUrl = window.location.href.replace(/#(.*)/, "") + "#wiki=" + this.options.url;
                    this.options.url = GetSiteUrl() + "/global/php/wiki_reader.php?url=" + this.options.url + "&type=popup"
                }
                if (this.options.type == "thl-content") {
                    if (this.options.url.indexOf("/") == 0) {
                        this.options.linkUrl = GetSiteUrl() + this.options.url
                    }
                    this.options.url = this.options.url.replace(/http:\/\/([\w:.]+)\//i, "/");
                    this.options.url = GetSiteUrl() + "/global/php/thl_reader.php?url=" + this.options.url;
                    if (!IsMainSite()) {
                        this.options.url = "/thl/utils/proxy/?proxy_url=" + this.options.url
                    }
                }
                if (!this.options.type) {
                    if (this.options.url.indexOf("/") == 0) {
                        if (this.options.useMainSiteForAjax) {
                            this.options.linkUrl = GetSiteUrl() + this.options.url;
                            this.options.url = GetSiteUrl() + this.options.url
                        } else {
                            this.options.linkUrl = GetCurrentSiteUrl() + this.options.url;
                            this.options.url = GetCurrentSiteUrl() + this.options.url
                        }
                    }
                }
            }
            a(".thl-popup").hide();
            this.createBox();
            if (this.options.url) {
                if (this.options.loadWith == "ajax") {
                    this.loadAjax(this.options.url)
                } else {
                    if (this.options.loadWith == "iframe") {
                        this.loadIframe(this.options.url);
                        if (this.options.overflowX) {
                            this.contentDiv.find("iframe:first").css("overflow-x", this.options.overflowX)
                        }
                        if (this.options.overflowY) {
                            this.contentDiv.find("iframe:first").css("overflow-y", this.options.overflowY)
                        }
                    }
                }
            }
            if (this.options.open) {
                this.open()
            }
            return this
        };
        this.center = function() {
            this.div.css("position", "absolute").css("left", (Math.max(0, jQuery(window).width() - this.div.width())) / 2 + jQuery(window).scrollLeft() + "px");
            if (top != self) {
                this.div.css("top", "20px")
            } else {
                this.div.css("top", (Math.max(0, jQuery(window).height() - this.div.height())) / 2 + jQuery(window).scrollTop() + "px")
            }
            return this
        };
        this.createBox = function() {
            if (!this.boxCreated) {
                if (this.options.id) {
                    this.id = this.options.id
                } else {
                    this.id = "thl_popup_" + jQuery(".thl-popup").length
                }
                var c = '<div class="thl-popup" id="' + this.id + '"><div class="thl-popup-header">' + this.options.header + '</div><div class="thl-popup-close"></div><div class="thl-popup-content"><div>' + this.options.content + '</div></div><div class="thl-popup-footer">' + this.options.footer + "</div></div>";
                jQuery("body").append(c);
                this.div = jQuery("#" + this.id);
                this.contentDiv = this.div.children(".thl-popup-content");
                this.headerDiv = this.div.children(".thl-popup-header");
                this.footerDiv = this.div.children(".thl-popup-footer");
                this.closeDiv = this.div.children(".thl-popup-close");
                this.div.draggable({
                    cancel: ".thl-popup-content,.thl-popup-close"
                });
                if (this.options.overflowX) {
                    this.contentDiv.css("overflow-x", this.options.overflowX)
                }
                if (this.options.overflowY) {
                    this.contentDiv.css("overflow-y", this.options.overflowY)
                }
                if (this.options.padding) {
                    var e = this.parsePadding(this.options.padding);
                    this.contentDiv.css("padding", e)
                }
                this.contentDiv.css("width", this.options.width + "px");
                if (this.options.flexibleHeight) {
                    this.contentDiv.css("max-height", this.options.height + "px")
                } else {
                    this.contentDiv.css("height", this.options.height + "px")
                }
                if (this.options.showLink && this.options.url) {
                    var g = this.options.newWindow ? "View this page in a new window..." : "View this page alone...";
                    var f = this.options.linkUrl ? this.options.linkUrl : this.options.url;
                    if (f.indexOf("/maps/collections/viewer.php") > -1 && f.indexOf("thl_reader") > -1) {
                        f = f.replace("global/php/thl_reader.php?url=/", "").replace(/\%25/g, "%").replace("%3Fi%3D", "?i=")
                    }
                    var d = '<a href="' + f + '" title="' + g + '" onclick="jQuery(\'#' + this.id + "').remove();\"" + (this.options.newWindow ? ' target="_blank"' : "") + ">" + g + "</a>";
                    this.headerDiv.html(d)
                }
                this.div.attr("id", this.id);
                if (this.options.closeWith == "hide") {
                    this.closeDiv.click(function() {
                        jQuery(this).parent(".thl-popup").hide()
                    })
                } else {
                    this.closeDiv.click(function() {
                        jQuery(this).parent(".thl-popup").remove()
                    })
                }
                this.boxCreated = true
            }
            return this
        };
        this.parsePadding = function(d) {
            d = d.split("-");
            for (var c in d) {
                d[c] += "px"
            }
            return d.join(" ")
        };
        this.setContent = function(c) {
            this.contentDiv.html(c);
            return this
        };
        this.open = function() {
            this.div.show();
            this.center();
            return this
        };
        this.close = function() {
            this.div.hide();
            return this
        };
        this.remove = function() {
            this.div.remove();
            return this
        };
        this.loadAjax = function(c) {
            this.contentDiv.load(c, null, function() {});
            return this
        };
        this.loadIframe = function(c) {
            this.contentDiv.html('<iframe id="' + this.id + '_iframe" src="' + c + '"></iframe>');
            return this
        };
        this.init();
        return this
    }
})(jQuery);

function ActivateThlPopups(a) {
    a = a ? a : "body";
    jQuery(a).find("a.thl-pop").each(function() {
        var c, b = {};
        b.url = jQuery(this).attr("href");
        if (jQuery(this).hasClass("wiki")) {
            b.type = "wiki"
        }
        if (jQuery(this).hasClass("thl-content")) {
            b.type = "thl-content"
        }
        if (jQuery(this).hasClass("iframe")) {
            b.loadWith = "iframe"
        }
        if (jQuery(this).hasClass("new-window")) {
            b.newWindow = true
        }
        if (jQuery(this).hasClass("no-view-alone")) {
            b.showLink = false
        }
        if (c = this.className.match(/width-([\d]+)/)) {
            b.width = c[1]
        }
        if (c = this.className.match(/height-([\d]+)/)) {
            b.height = c[1]
        }
        if (c = this.className.match(/overflow-x-([a-z]+)/)) {
            b.overflowX = c[1]
        }
        if (c = this.className.match(/overflow-y-([a-z]+)/)) {
            b.overflowY = c[1]
        }
        if (c = this.className.match(/padding-([\d-]+)/)) {
            b.padding = c[1]
        }
        if (c = this.className.match(/no-main-site-ajax/)) {
            b.useMainSiteForAjax = false
        }
        jQuery(this).click(function() {
            jQuery().thlPopup(b);
            return false
        })
    })
}
jQuery(document).ready(function() {
    ActivateThlPopups()
});