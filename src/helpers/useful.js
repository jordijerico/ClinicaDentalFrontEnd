export const validate = (name, data) => {


    switch (name) {
        case 'name':
        case 'nombre':

        case 'surname':
        case 'apellido':

            break;

        case 'phone':
        case 'telefono':

            break;
        case 'email':
        case 'mail':
            if (data === "") {
                return { message: "Please fill the field" };
            } else if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
            ) {
                return { message: "Invalid e-mail format"};
            }

            return { message: ""};

            break;
        case 'password':
        case 'contraseña':
            if (data === "") {
                return { message: "Please fill the field" };
            } else if (!/[\d()+-]/g.test(data)) {
                return { message: "Invalid password format" };
            }
            return { message: "" };


            break;

        default:
            break;
    }

}