import React from 'react';

const FAQ = () => {

    return(
        <div className= 'FAQ'>
            <h1>Frequently Asked Questions</h1>
            <ul className='faq-list'>
                <li>
                    <h3 className='question'>
                        Question 1?
                    </h3>
                    <p className='answer'>
                        The answer.
                    </p>
                </li>
                <li>
                    <h3 className='question'>
                        Question 2?
                    </h3>
                    <p className='answer'>
                        The answer.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default FAQ