import { Component } from 'react'

class SignOut extends Component {
    componentDidMount() {
        const { history, clearUser, user } = this.props
        signOut(user)
            .then(() => clearUser())
            .finally(() => history.push('/'))
    }

    render() {
        return ''
    }
}

export default SignOut