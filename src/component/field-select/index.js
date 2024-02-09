class FieldSelect {
    static toggle = (target) => {
        const options = target.nextElementSibling;

        options.toggleAttribute('active');

        setTimeout(() => {
            window.addEventListener(
                'click',
                (event) => {
                    if (!options.contains(event.target)) {
                        options.removeAttribute('active');
                    }
                },
                { once: true },
            );
        });
    };

    static change = (target) => {
        const list = target.parentElement;

        const active = list.querySelector('*[active]');
        if (active) {
            active.toggleAttribute('active');
        }
        target.toggleAttribute('active');

        const parent = target.parentElement.parentElement;
        const value = parent.querySelector('.field__value');
        if (value) {
            value.innerText = target.innerText;
            value.classList.remove('field__value--placeholder');
        }

        list.toggleAttribute('active');
    };
}

window.fieldSelect = FieldSelect;
