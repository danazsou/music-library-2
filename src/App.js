<<<<<<< HEAD
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { Fragment } from 'react'
//import { Fragment } from 'react/cjs/react.production.min'
=======
import { useState, useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'
>>>>>>> withContext

function App(){
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])
	let searchInput = useRef('')

	const API_URL = 'https://itunes.apple.com/search?term='
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		// Fetch Data
		const fetchData = async () => {
			document.title = `${term} Music`
			const response = await fetch(API_URL + term)
			const resData = await response.json()
			if (resData.results.length > 0) {
				// Set State and Context value
				return setData(resData.results)
			} else {
				return setMessage('Not Found')
			}
		}
		fetchData()
	}

	return (
		<div>
<<<<<<< HEAD
			{message}
			<Router>
				<Routes>
					<Route path="/" element={
						<Fragment>
							<SearchBar handleSearch = {handleSearch}/>
							<Gallery data={data} />
						</Fragment>
					} />
					<Route path="/album/:id" element={<AlbumView />} />
					<Route path="/artist/:id" element={<ArtistView />} />
				</Routes>
			</Router>
=======
			<SearchContext.Provider value={{
				term: searchInput,
				handleSearch: handleSearch
			}}>
				<SearchBar />
			</SearchContext.Provider>
			{message}
			<DataContext.Provider value={data}>
				<Gallery />
			</DataContext.Provider>
>>>>>>> withContext
		</div>
  	);
}

export default App;