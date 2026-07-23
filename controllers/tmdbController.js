import axios from "axios";

const TMDB_BASE_URL="https://api.themoviedb.org/3";

const tmdbRequest=async(url,params={})=>{
    console.log("TMDB REQUEST:",url);
    console.log("TMDB KEY:",process.env.TMDB_API_KEY?"Loaded":"Missing");

    return await axios.get(`${TMDB_BASE_URL}${url}`,{
        params:{
            api_key:process.env.TMDB_API_KEY,
            ...params
        },
        timeout:30000,
        family:4,
        headers:{
            accept:"application/json",
            "User-Agent":"Screen-Scoop-App"
        }
    });
};


const handleError=(res,error)=>{
    console.log(
        "TMDB ERROR:",
        error.response?.data||error.message
    );

    res.status(500).json({
        success:false,
        message:error.response?.data?.status_message||error.message
    });
};


export const getTrendingMovies=async(req,res)=>{
    try{
        const r=await tmdbRequest("/trending/movie/week");
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getPopularMovies=async(req,res)=>{
    try{
        const r=await tmdbRequest("/movie/popular");
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getTopRatedMovies=async(req,res)=>{
    try{
        const r=await tmdbRequest("/movie/top_rated");
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getUpcomingMovies=async(req,res)=>{
    try{
        const r=await tmdbRequest("/movie/upcoming");
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getNowPlayingMovies=async(req,res)=>{
    try{
        const r=await tmdbRequest("/movie/now_playing");
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const searchTMDBMovies=async(req,res)=>{
    try{

        if(!req.query.q)
            return res.status(400).json({message:"Search query required"});

        const r=await tmdbRequest("/search/movie",{
            query:req.query.q
        });

        res.json(r.data);

    }catch(e){handleError(res,e);}
};


export const getMovieDetails=async(req,res)=>{
    try{
        const r=await tmdbRequest(`/movie/${req.params.id}`);
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getMovieTrailer=async(req,res)=>{
    try{
        const r=await tmdbRequest(`/movie/${req.params.id}/videos`);
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getMovieCast=async(req,res)=>{
    try{
        const r=await tmdbRequest(`/movie/${req.params.id}/credits`);
        res.json(r.data.cast);
    }catch(e){handleError(res,e);}
};


export const getSimilarMovies=async(req,res)=>{
    try{
        const r=await tmdbRequest(`/movie/${req.params.id}/similar`);
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getRecommendedMovies=async(req,res)=>{
    try{
        const r=await tmdbRequest(`/movie/${req.params.id}/recommendations`);
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getMovieProviders=async(req,res)=>{
    try{
        const r=await tmdbRequest(`/movie/${req.params.id}/watch/providers`);
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getPopularTVShows=async(req,res)=>{
    try{
        const r=await tmdbRequest("/tv/popular");
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getTopRatedTVShows=async(req,res)=>{
    try{
        const r=await tmdbRequest("/tv/top_rated");
        res.json(r.data);
    }catch(e){handleError(res,e);}
};


export const getOnAirTVShows=async(req,res)=>{
    try{
        const r=await tmdbRequest("/tv/on_the_air");
        res.json(r.data);
    }catch(e){handleError(res,e);}
};
// Anime Movies

export const getAnimeMovies=async(req,res)=>{

try{

const r=await tmdbRequest(
"/discover/movie",
{
with_genres:16,
with_original_language:"ja"
}
);

res.json(r.data);

}catch(e){

handleError(res,e);

}

};



// Movies By Genre

export const getMoviesByGenre=async(req,res)=>{

try{

const r=await tmdbRequest(
"/discover/movie",
{
with_genres:req.params.id
}
);

res.json(r.data);

}catch(e){

handleError(res,e);

}

};



// Popular Celebrities

export const getPopularPeople=async(req,res)=>{

try{

const r=await tmdbRequest(
"/person/popular"
);

res.json(r.data);

}catch(e){

handleError(res,e);

}

};