jQuery.fn.countCharacters = function() {

    return this.each(function() {

        var textarea;
        var charCounter;
        var counter;

        textarea = $(this);

        // Aquest or és per si no hi ha informacion dins el textarea pues ho inicialitza en 0
        charCounter = textarea.data('charCount') || 0;
        // Cream el contador
        counter = $('<span class="char">' + charCounter + '</span>');

        textarea.after(counter);

        textarea.on('input', function() {
            charCounter = textarea.val().length;
            counter.text(charCounter + " characters");
        });

        textarea.data('charCounter', charCounter);

        textarea.trigger('input');
    });
}

$(document).ready(function () {
    $("textarea").countCharacters();
});