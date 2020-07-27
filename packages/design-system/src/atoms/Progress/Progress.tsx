import React from 'react'

interface IProgressProps {
    now: number
    min: number
    max: number
    /**
     * @default false
     */
    striped?: boolean
}

const Progress = ({ now, min, max, striped }: IProgressProps) => (
    <div className='progress'>
        <div className={`progress-bar${striped ? ' progress-bar-striped' : ''}`} role='progressbar' style={{ width: `${now}%` }} aria-valuenow={now} aria-valuemin={min} aria-valuemax={max} />
    </div>
)

export default Progress
