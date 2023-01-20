$(function () {
    // RU
    $(".header__nav-bottom-languages-ru, .footer__addon-bottom-languages-ru").click(function (e) {
        $("ul.header__nav-top-list li a").each((ind, elem) => {
            switch (ind) {
                case 0:
                    $(elem).text("О компании");
                    break;
                case 1:
                    $(elem).text("Продукция");
                    break;
                case 2:
                    $(elem).text("Отрасли");
                    break;
                case 3:
                    $(elem).text("Сервис");
                    break;
                case 4:
                    $(elem).text("Новости");
                    break;
                case 5:
                    $(elem).text("Вакансии");
                    break;
                case 6:
                    $(elem).text("Контакты");
                default:
                    break;
            }
        });
        $("ul.footer__addon-top-list li a").each((ind, elem) => {
            switch (ind) {
                case 0:
                    $(elem).text("О компании");
                    break;
                case 1:
                    $(elem).text("Продукция");
                    break;
                case 2:
                    $(elem).text("Отрасли");
                    break;
                case 3:
                    $(elem).text("Сервис");
                    break;
                case 4:
                    $(elem).text("Новости");
                    break;
                case 5:
                    $(elem).text("Вакансии");
                    break;
                case 6:
                    $(elem).text("Контакты");
                    break;
                default:
                    break;
            }
        });

        $(".footer__addon-bottom-law").text("Все права защищены 2022-2023");
        $(".footer__connection-block-form-send").attr("value", "Отправить");
        let inputName = $(".footer__connection-block-form-wrapper-input")[0];
        $(inputName).attr("placeholder", "Ваше имя");
        $(".footer__connection-block-questions-download ").text("Скачать PDF презентацию");
        $(".footer__connection-block-questions-text").html(
            "У вас остались к нам вопросы?<br><br>Напишите нам или скачайте нашу презентацию",
        );
        $(".footer__connection-title").text("Связаться с нами");
        $(".main__partners-top-title ").text("Наши партнеры");
        $(".main__partners-top-join").text("Стать партнером");
        $(".main__who-wrapper-title").text("LAMYRA FOOD это Белорусский производитель и разработчик:");
        $(".main__who-wrapper-info-left-top ").text("Стабилизаторов");
        $(".main__who-wrapper-info-left-bottom").text("Производитель кормовых добавок для сельскохозяйственной отрасли");
        $(".main__who-wrapper-info-right-text").text(
            "Натуральных красителей, кондитерских и гастрономических продуктов для пищевой промышленности",
        );

        $(".header__greeting-titles-title").text("Мы делаем вкусные продукты полезными,");
        $(".header__greeting-titles-subtitle").html("а полезные — вкусными<span class='header__greeting-titles-subtitle-heart'>&nbsp;&nbsp;</span>");
        $(".header__greeting-buttons-about").text("О компании");
        $(".header__greeting-buttons-products").text("Продукция");
        $(".header__greeting-blocks-first-quality").text("Качество продукции");
        $(".header__greeting-blocks-first-request").text("Разработка рецептур по индивидуальному запросу");
        $(".header__greeting-blocks-first-question").text("Задать нам вопрос");
        $(".header__greeting-blocks-second-support-text").text("Технологическая поддержка");
    });

    // EN
    $(".header__nav-bottom-languages-en, .footer__addon-bottom-languages-en").click(function (e) {
        $("ul.header__nav-top-list li a").each((ind, elem) => {
            switch (ind) {
                case 0:
                    $(elem).text("About Us");
                    break;
                case 1:
                    $(elem).text("Products");
                    break;
                case 2:
                    $(elem).text("Industries");
                    break;
                case 3:
                    $(elem).text("Service");
                    break;
                case 4:
                    $(elem).text("News");
                    break;
                case 5:
                    $(elem).text("Jobs");
                    break;
                case 6:
                    $(elem).text("Contacts");
                    break;
                default:
                    break;
            }
        });
        $("ul.footer__addon-top-list li a").each((ind, elem) => {
            switch (ind) {
                case 0:
                    $(elem).text("About Us");
                    break;
                case 1:
                    $(elem).text("Products");
                    break;
                case 2:
                    $(elem).text("Industries");
                    break;
                case 3:
                    $(elem).text("Service");
                    break;
                case 4:
                    $(elem).text("News");
                    break;
                case 5:
                    $(elem).text("Jobs");
                    break;
                case 6:
                    $(elem).text("Contacts");
                    break;
                default:
                    break;
            }
        });
        $(".footer__addon-bottom-law").text("All Rights Reserved 2022-2023");
        $(".footer__connection-block-form-send").attr("value", "Send");
        let inputName = $(".footer__connection-block-form-wrapper-input")[0];
        $(inputName).attr("placeholder", "Name");
        $(".footer__connection-block-questions-download ").text("Download PDF About Us");
        $(".footer__connection-block-questions-text").html(
            "Do you have any questions for us?<br><br>Write to us or download our presentation",
        );
        $(".footer__connection-title").text("We will be intouch");
        $(".main__partners-top-title ").text("Our Partners");
        $(".main__partners-top-join").text("Become a partner");
        $(".main__who-wrapper-title").text("LAMYRA FOOD is a Belarusian manufacturer and developer of:");
        $(".main__who-wrapper-info-left-top ").text("Stabilizers");
        $(".main__who-wrapper-info-left-bottom").text("Manufacturer of feed additives for agricultural industries");
        $(".main__who-wrapper-info-right-text").text(
            "Natural dyes, confectionery and gastronomic products for the food industry",
        );
        $(".header__greeting-titles-title").text("We make tasty products very useful and");
        $(".header__greeting-titles-subtitle").html("healthy products — tasty<span class='header__greeting-titles-subtitle-heart'>&nbsp;&nbsp;</span>");
        $(".header__greeting-buttons-about").text("About Us");
        $(".header__greeting-buttons-products").text("Products");
        $(".header__greeting-blocks-first-quality").text("Product quality");
        $(".header__greeting-blocks-first-request").text("Recipe development on individual request");
        $(".header__greeting-blocks-first-question").text("Ask us a question");
        $(".header__greeting-blocks-second-support-text").text("Technology support");
    });
});
