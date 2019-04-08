var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.oneTrustComponent=SfdcWwwBase.oneTrustComponent||{};
(function(a){SfdcWwwBase.oneTrustComponent.changeButtons=function(){var b=a(".optanon-allow-all-button").find(".optanon-white-button-middle");
a(".menu-item-necessary, .menu-item-functional, .menu-item-advertising").click(function(){a(".optanon-save-settings-button").addClass("show");
b.addClass("optanon-ghost-button");
b.children().addClass("optanon-ghost-button-text-color")
});
a(".menu-item-about").click(function(){a(".optanon-save-settings-button").removeClass("show");
b.removeClass("optanon-ghost-button");
b.children().removeClass("optanon-ghost-button-text-color")
})
};
SfdcWwwBase.oneTrustComponent.changeTabText=function(){var b=a(".menu-item-about, .menu-item-necessary, .menu-item-functional, .menu-item-advertising");
a(".menu-item-about").find(".preference-menu-item").addClass("preference-menu-text");
b.click(function(){b.find(".preference-menu-item").removeClass("preference-menu-text")
});
a(".menu-item-about").click(function(){a(".menu-item-about").find(".preference-menu-item").addClass("preference-menu-text")
});
a(".menu-item-necessary").click(function(){a(".menu-item-necessary").find(".preference-menu-item").addClass("preference-menu-text")
});
a(".menu-item-functional").click(function(){a(".menu-item-functional").find(".preference-menu-item").addClass("preference-menu-text")
});
a(".menu-item-advertising").click(function(){a(".menu-item-advertising").find(".preference-menu-item").addClass("preference-menu-text")
})
};
SfdcWwwBase.oneTrustComponent.overrideSettings=function(){a(".optanon-toggle-display").click(function(){a(".optanon-alert-box-wrapper").hide()
});
a(".menu-item-about, .menu-item-necessary, .menu-item-functional, .menu-item-advertising, .optanon-white-button-middle").mousedown(function(b){b.preventDefault()
});
a(".optanon-status-checkbox").click(function(){a(".optanon-status-checkbox").blur()
});
a("#optanon-popup-wrapper").removeAttr("tabindex");
a("#optanon-popup-wrapper").attr("data-keyboard","false");
a("#optanon-popup-wrapper").attr("data-backdrop","static")
};
SfdcWwwBase.oneTrustComponent.init=function(){a(window).on("load",function(){SfdcWwwBase.oneTrustComponent.overrideSettings();
SfdcWwwBase.oneTrustComponent.changeButtons();
SfdcWwwBase.oneTrustComponent.changeTabText()
})
};
a(document).ready(function(){SfdcWwwBase.oneTrustComponent.init()
})
}(jQuery));