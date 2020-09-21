$('.section-questions-accord__item').each(function () {
    if ($(this).hasClass('active__acord'))
    {
        $(this).children().eq(1).slideDown();
    }
})

$('.section-questions-accord__item').click(function () {
    for (let i=0; i<document.querySelectorAll('.section-questions-accord__item').length; i++)
    {
        document.querySelectorAll('.section-questions-accord__item')[i].classList.remove('active__acord');
        $('.section-questions-accord__item').eq(i).children().eq(1).slideUp();
    }
    $(this)[0].classList.add('active__acord');
    $(this).children().eq(1).slideDown();
})