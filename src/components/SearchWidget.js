import React from 'react'

export default function SearchWidget({searchInput, setSearchInput}) {
    return (
        <div className="searchArea mt-5">
            <h5 className='text-center'>Etkinlik Ara</h5>
            <div className="d-flex justify-content-center">
                <input type="text" className='searchInput' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            </div>

        </div>
    )
}
