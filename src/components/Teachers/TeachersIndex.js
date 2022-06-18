import React from 'react'
import { FiLogOut } from 'react-icons/fi';
const TeachersIndex = () => {
  return (
    <div>
      <h1>TeachersIndex</h1>
      <form>
        <button type="submit">
          <li className="log-out" onClick={() => {
            localStorage.setItem("data", JSON.stringify(
              {
                is_superuser: false,
                is_student: false,
                is_teacher: false,
                is_accountant: false,
                is_reception: false
              }
            ))
          }}>
            Log Out
            <FiLogOut />
          </li>
        </button>
      </form>
    </div>
  )
}

export default TeachersIndex
