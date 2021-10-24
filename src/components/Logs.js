import React from 'react'
import Card from '../UI/Card'
import styles from './Logs.module.css'

const Logs = (props) => {
    return (
        <Card>
            <ul className={styles['logos-list']}>
                {props.items.map(user => <li key={user.key}>{`${user.username} (${user.age} years old)`}</li>)}
            </ul>
        </Card>
    )
}

export default Logs;