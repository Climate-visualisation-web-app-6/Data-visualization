import React from 'react'
import Cookies from 'universal-cookie';

function UserInfo() {
    const cookies = new Cookies();

  return (
    <div>
        <div >
            {
                cookies.get('firstname') != null
                ?
                    <div>
                        <h1 style={{textAlign: 'center' }}>{cookies.get('firstname')} {cookies.get('lastname')}</h1>
                        <h1 style={{textAlign: 'center' }}>{cookies.get('email')}</h1>
                    </div>
                :
                <h1 style={{textAlign: 'center' }}>Not Logged in</h1>

            }
        </div>

    </div>
  )
}

export default UserInfo