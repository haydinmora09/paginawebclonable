jQuery(function ($) {
    "use strict";

    var valueArray = [];
    var valueArrayString = [];

    $(window).load(function () {
        clickButtonExpression();
        clickButtonCalc();
        clickButtonShowTable();
        clickButtonHideTable();
    });

    function clickButtonExpression() {
        $('.wrap-expression-buttons .button').on('click', function (e) {
            var key = $(e.currentTarget).data('button');
            if (key !== 'del') {
                valueArray.push(key);
                valueArrayString = valueArray.join(' ');
                $('.wrap-calculator #expression-input').val(valueArrayString);
            } else {
                valueArray.pop();
                valueArrayString = valueArray.join(' ');
                $('.wrap-calculator #expression-input').val(valueArrayString);
            }
        });
    }

    function clickButtonCalc() {
        $('.wrap-calc-buttons .button').on('click', function (e) {
            var key = $(e.currentTarget).data('button');
            if (key === 'erase') {
                eraseValue();
            } else if (key === 'calc') {
                calculateValue();
            }
        });

        calculateValue();
    }

    function calculateValue() {
        //TODO calculateValue 
    }

    function eraseValue() {
        valueArray = [];
        valueArrayString = '';
        $('.wrap-calculator #expression-input').val('');
    }

    function clickButtonShowTable() {
        $('.result .show-table').on('click', function (e) {
            $('.blackout').show();
            //TODO Mostrar tablas
            $('.blackout .wrap-table .table-content .table').append('<h3>' + valueArrayString + '</h3>')
        });
    }

    function clickButtonHideTable() {
        $('.blackout .wrap-table .header .close').on('click', function (e) {
            $('.blackout').hide();
            $('.blackout .wrap-table .table-content .table').empty();
        });
    }
});