$('.section-questions-accord__item').each(function () {
    if ($(this).hasClass('active__acord'))
    {
        $(this).children().eq(1).slideDown();
    }
});

$('.section-questions-accord__item').click(function () {
    if ($(this).hasClass('active__acord'))
    {
        $(this).children().eq(1).slideUp();
        $(this).removeClass('active__acord');
        return false;
    }
    for (let i=0; i<document.querySelectorAll('.section-questions-accord__item').length; i++)
    {
        document.querySelectorAll('.section-questions-accord__item')[i].classList.remove('active__acord');
        $('.section-questions-accord__item').eq(i).children().eq(1).slideUp();
    }
    $(this)[0].classList.add('active__acord');
    $(this).children().eq(1).slideDown();
});

$('.form-block_amount-btn').click(function() {
    let num = parseInt($('.form-block_amount-text').text());

    if ($(this).data('type') === 'minus')
    {
        if (num === 0)
        {
            return false;
        }

        $('.form-block_amount-text').text(num-=1);
    }

    if ($(this).data('type') === 'plus') 
    {
        $('.form-block_amount-text').text(num+=1);
    }
})


$('#dropdown-phone').on('shown.bs.dropdown', function () {
    $('#dropdown-phone .dropdown-item').click(function () {
        $('#dropdown-phone .dropdown-toggle').text($(this).text());
        $('.section-header-phone a').attr('href', `+38${$(this).text().match(/\d+/g).join('')}`);
    })
})