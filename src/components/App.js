// import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SharedLayout from './SharedLayout';
// import { HomePage } from '../pages/HomePage';
// import { MoviesPage } from '../pages/MoviesPage';
// import { MovieDetailsPage } from '../pages/MovieDetailsPage';
// import { Cast } from '../pages/Cast';
// import { Reviews } from '../pages/Reviews';
import Skeleton from '../components/Skeleton';

const HomePage = lazy(() =>
  import('../pages/HomePage' /*webpackChunkName: "HomePage"*/),
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /*webpackChunkName: "MoviesPage"*/),
);
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage"*/),
);
const Cast = lazy(() => import('../pages/Cast' /*webpackChunkName: "Cast"*/));
const Reviews = lazy(() =>
  import('../pages/Reviews' /*webpackChunkName: "Reviews"*/),
);

export const App = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
