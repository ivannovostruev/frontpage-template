$(function() {
    toggleAbout();
    toggleSupport();
});


function toggleAbout() {
    const buttonSelector            = '#about';
    const popupSelector             = '#about-popup';
    const animationClassesOnShow    = 'animate__animated animate__bounceIn';
    const animationClassesOnHide    = 'animate__animated animate__bounceOut';

    let popup = $(popupSelector);

    $(buttonSelector).click(function() {
        if (popup.is(':hidden')) {
            popup.toggle().addClass(animationClassesOnShow);
            setTimeout(customShow, 800, popup);
        } else if (popup.is(':visible')) {
            popup.addClass(animationClassesOnHide);
            setTimeout(customHide,700, popup);
        }
    });

    $(document).mouseup(function(event) {
        let target = event.target;

        // if the target of the click isn't the
        // container nor a descendant of the container
        if (!popup.is(target) && popup.has(target).length === 0) {
            if (popup.is(':visible')) {
                popup.addClass(animationClassesOnHide);
                setTimeout(customHide,700, popup);
            }
        }
    });

    function customShow(element) {
        element.removeClass(animationClassesOnShow);
    }

    function customHide(element) {
        element.hide();
        element.removeClass(animationClassesOnHide);
    }
}

function toggleSupport() {
    togglePopup(
        '.support',
        '.support-contacts'
    );
}

function togglePopup(buttonSelector, popupSelector, speed = 300) {
    let button = $(buttonSelector);
    let popup  = $(popupSelector);

    button.click(function(event) {
        if (popup.is(':hidden')) {
            popup.slideDown(speed);
        } else if (popup.is(':visible')) {
            popup.slideUp(speed);
        }
    });
}
