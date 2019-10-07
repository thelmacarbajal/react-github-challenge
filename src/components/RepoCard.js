import React from 'react'

function RepoCard (props) {
  const { id, name, description } = props
  return (
    <div
      className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5>
              { id }
            </h5>
            <p className='card-text'>
                { name }
            </p>
            <p className='card-text'>
              { description }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepoCard
