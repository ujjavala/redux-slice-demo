import { fetchStudentDetails, toggleFlag } from '../repositories/studentDetails'
import { state } from '../store/studentSlice'
import { useDispatch, useSelector } from 'react-redux'
import PageAlert from '../components/PageAlert/PageAlert'
import React, { useEffect } from 'react'
import styles from './StudentPage.module.scss'


const StudentPage = () => {
    const toggleCourse = (x) => {
        dispatch(toggleFlag(isFlagOpted))
    }
    const dispatch = useDispatch()
    const selectedState = useSelector(state)
    const studentId = selectedState.studentId
    const studentName = selectedState.studentName

    const isFlagOpted = selectedState.isFlagOpted
    const notification = selectedState.notification
    const subjects = selectedState.subjects

    useEffect(() => {
        document.title = 'Student Details'
        dispatch(fetchStudentDetails())
    }, [])
    return (
        <div>
            <div className={styles.card}>
                <PageAlert notification={notification} />
                <p className={styles.title}>Student Profile</p>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <h1>{studentName}</h1>
                            <div className={styles.show}></div>
                        </div>
                        <div className={styles.flipCardBack}>
                            <ul> Student id: {studentId}</ul>
                            <ul>STEM course : {subjects.stem.specialization}</ul>
                            <ul>Non STEM course : {subjects.nonStem.specialization}
                            </ul>
                        </div>
                    </div>
                </div>
                <span> {<h3>Opt in for accomodation</h3> && !isFlagOpted && (<i data-testid="ToggleButton" onClick={toggleCourse} className="fa fa-thumbs-up"></i>)}
                    {<h3>Opt out of accomodation</h3> && isFlagOpted && (<i onClick={toggleCourse} className="fa fa-thumbs-down"></i>)}</span>

            </div>
        </div>
    )
}

export default StudentPage
