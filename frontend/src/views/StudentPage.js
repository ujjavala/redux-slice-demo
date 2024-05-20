import { fetchStudentDetails, toggleFlag } from '../repositories/studentDetails'
import { state } from '../store/studentSlice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useRef } from 'react'
import styles from './StudentPage.module.scss'
import PageAlert from '../components/PageAlert/PageAlert'


const StudentPage = () => {
    const toggleCourse = (x) => {
        dispatch(toggleFlag(true))
    }
    const dispatch = useDispatch()
    const selectedState = useSelector(state)
    const studentId = selectedState.studentId
    const studentName = selectedState.studentName

    const isFlagOpted = selectedState.isFlagOpted
    // const isLoading = selectedState.isLoading
    // const isToggleError = selectedState.isToggleError
    // const isFetchError = selectedState.isFetchError
    const notification = selectedState.notification
    const subjects = selectedState.subjects
    const mainContentRef = useRef(null)

    useEffect(() => {
        document.title = "Student Details"
        dispatch(fetchStudentDetails())
    }, [mainContentRef])
    return (
        <div ref={mainContentRef}>
            <PageAlert notification={notification} />
            Student id: {studentId}
            Student stem course : {subjects.stem.specialization}
            Student non stem course : {subjects.nonStem.specialization}
            <div className={styles.card}>
                {/* <img src="img.jpg" alt="John" style="width:100%" /> */}
                <h1>{studentName}</h1>
                <p className={styles.title}>CEO & Founder, Example</p>

                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className="flip-card-front">
                            Stem Courses Opted
                        </div>
                        <div className={styles["flip-card-back"]}>
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                {!isFlagOpted && (<i onClick={toggleCourse} className="fa fa-thumbs-up"></i>)}
                {isFlagOpted && (<i onClick={toggleCourse} className="fa fa-thumbs-down"></i>)}
            </div>


        </div>
    )
}

export default StudentPage
