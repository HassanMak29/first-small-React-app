import React, { useState } from 'react'
import Card from '../UI/Card'
import styles from './InputForm.module.css'
import ErrorModal from '../UI/ErrorModal'
import Button from '../UI/Button'

export default function InputForm(props) {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState();


    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }

    const ageCHangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'please enter a valid age (> 0)'
            })
            return;
        }
        const data = {
            key: Math.random().toString(),
            username: enteredUsername,
            age: +enteredAge,
        }
        props.onAddUser(data)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card>
                <form className={styles.form} onSubmit={formSubmitHandler}>
                    <div className={styles['form-control']}>
                        <label>Username</label>
                        <input type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                    </div>
                    <div className={styles['form-control']}>
                        <label>Age (Years)</label>
                        <input type="number" value={enteredAge} onChange={ageCHangeHandler} />
                    </div>
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </div>

    );
}