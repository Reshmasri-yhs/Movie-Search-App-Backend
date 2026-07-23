import express from "express";

import {
getTrendingMovies,
getPopularMovies,
getTopRatedMovies,
getUpcomingMovies,
getNowPlayingMovies,
searchTMDBMovies,
getMovieDetails,
getMovieTrailer,
getMovieCast,
getSimilarMovies,
getRecommendedMovies,
getMovieProviders,
getPopularTVShows,
getTopRatedTVShows,
getOnAirTVShows,
getAnimeMovies,
getMoviesByGenre,
getPopularPeople
} from "../controllers/tmdbController.js";


const router=express.Router();


// MOVIES

router.get("/trending",getTrendingMovies);
router.get("/popular",getPopularMovies);
router.get("/top-rated",getTopRatedMovies);
router.get("/upcoming",getUpcomingMovies);
router.get("/now-playing",getNowPlayingMovies);


// SEARCH

router.get("/search",searchTMDBMovies);


// DETAILS

router.get("/movie/:id",getMovieDetails);


// MEDIA

router.get("/movie/:id/trailer",getMovieTrailer);
router.get("/movie/:id/cast",getMovieCast);


// DISCOVERY

router.get("/movie/:id/similar",getSimilarMovies);
router.get("/movie/:id/recommendations",getRecommendedMovies);


// PROVIDERS

router.get("/movie/:id/providers",getMovieProviders);


// TV

router.get("/tv/popular",getPopularTVShows);
router.get("/tv/top-rated",getTopRatedTVShows);
router.get("/tv/on-air",getOnAirTVShows);


// SIDEBAR

router.get("/anime",getAnimeMovies);

router.get("/genre/:id",getMoviesByGenre);

router.get("/people",getPopularPeople);


export default router;