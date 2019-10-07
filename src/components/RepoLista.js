import React from 'react'
import RepoCard from  './RepoCard'

function RepoLista (props) {
  const { repos } = props

  return (
    <container>
    {
      repos.map(repo => (

        <RepoCard
          id={repo.id}
          name={repo.name}
          description={repo.description}
          private={repo.private}
          node_id={repo.node_id}
          key={repo.id}
        />
      ))
    }
    </container>
  )
}

export default RepoLista
