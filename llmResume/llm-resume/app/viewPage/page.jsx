import React from 'react'
import NavMenu from '../components/NavMenu'

const page = () => {
  return (
    <div>
        <div>
            <h1>Here is where you can copy the code for your website!</h1>
        </div>
        <div>
            <h1>
                Instructions:
            </h1>
            <div>
                <ol type='1'>
                    <li>Copy the code from the code snippet segment</li>
                    <li>Save it in a NotePad as "name_here".html</li>
                    <li>
                        Use the Firebase hosting platform to host your website!
                    </li>
                </ol>
            </div>
            <div>
                <NavMenu />
            </div>
        </div>
    </div>
  )
}

export default page