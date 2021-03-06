const constraints = {
    firstname: {
        presence: true
    },
    lastname: {
        presence: true
    },
    email: {
        presence: true,
        email: true
    },
    phoneNumber: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be least 10 digits"
        }
    },
    chooseCountry: {
        presence: true
    },
    chooseLanguage: {
        presence: true
    },
}

const app = Vue.createApp({
    data() {
        return {
            profile: './images/Nooch.jpg',
            firstname: null,
            lastname: null,
            email: null,
            phoneNumber: null,
            chooseCountry: null,
            countries: [{
                    id: 1,
                    country_name: 'Thailand'
                },
                {
                    id: 2,
                    country_name: 'Korea'
                },
                {
                    id: 3,
                    country_name: 'Japan'
                },
                {
                    id: 4,
                    country_name: 'USA'
                }
            ],
            chooseLanguage: null,
            languages: [{
                    id: 1,
                    language_name: 'Thai'
                },
                {
                    id: 2,
                    language_name: 'Korean'
                },
                {
                    id: 3,
                    language_name: 'Japanese'
                },
                {
                    id: 4,
                    language_name: 'English'
                }
            ],
            errors: null
        }
    },
    methods: {
        checkForm() {
            if (this.firstname && this.lastname && this.email && this.phoneNumber && this.chooseCountry && this.chooseLanguage) {
                alert("Your profile is updated successfully.")
            }
            this.errors = validate({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    chooseCountry: this.chooseCountry,
                    chooseLanguage: this.chooseLanguage
                },
                constraints)
            if (this.errors) {
                console.log(this.errors)
            }
        }
    }
})

app.mount('#app')