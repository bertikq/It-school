const form = document.forms[0];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    new FormData(form);
});

form.addEventListener("formdata", function (event) {
    const data = event.formData;

    // get the data
    const entries = [...data.entries()];
    console.log(entries);

    const values = [...data.values()];
    console.log(values);


    if (values[0].length > 0 && values[1].length > 0 && values[2].length > 0) {
        Swal.fire(
            'Форма отправлена!',
            'Вы отправили заявку!',
            'success'
        );
    }
    else
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Имя, фамилия и отчетсво не должны быть пустыми!'
        });
    }
});
