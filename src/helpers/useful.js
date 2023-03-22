export const validate = (name, data) => {


    switch (name) {
        case 'name':
        case 'nombre':

            if (data === "") {
                return { message: "Please fill the field" };
            } else if (!/[a-z]/gi.test(data)) {
                return { message: "Please fill with a valid text" };
            }

            return { message: "" };

        case 'surname':
        case 'apellido':

            if (data === "") {
                return { message: "Please fill the field" };
            } else if (!/[a-z]/gi.test(data)) {
                return { message: "Please fill with a valid text" };
            }

            return { message: "" };


        case 'phone':
        case 'telefono':
            if (data === "") {
                return { message: "Please fill the field" };
            } else if (!/^[0-9]{3}?[-\s\.]?[0-9]{3}?[-\s\.]?[0-9]{3}$/.test(data)) {
                return { message: "Invalid Phone format" };
            }

            return { message: "" };
        case 'email':
        case 'mail':
            if (data === "") {
                return { message: "Please fill the field" };
            } else if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
            ) {
                return { message: "Invalid e-mail format" };
            }

            return { message: "" };


        case 'password':
        case 'contraseña':
            if (data === "") {
                return { message: "Please fill the field" };
            } else if (!/[\d()+-]/g.test(data)) {
                return { message: "Invalid password format" };
            }
            return { message: "" };

        default:
            break;
    }

}