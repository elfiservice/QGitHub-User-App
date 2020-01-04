import React from 'react'

const ListOfSttaredRepos = (props) => {
    return (
        <div className="card info-card-dev__list-of-sttared-repos">
                        
        {(props.reposSttaredList.length <= 0 
            ?   "This Dev not have any repo sttared :("
            :  <div> 
                    <h4>This Dev is following this {props.reposSttaredList.length} repos</h4>
                    <ul>
                        {props.reposSttaredList.map(repo => (
                            <li key={repo.id}>
                                <i className="fa fa-star" aria-hidden="true"></i> {repo.name}
                            </li>
                        ))}
                    </ul>
                </div>
        )}
    </div>
    )
}

export default ListOfSttaredRepos