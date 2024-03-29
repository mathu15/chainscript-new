import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// // _app.js
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useStore } from "react-redux";
// import { userLoggedIn } from "./features/auth/authSlice";

// function MyApp({ Component, pageProps }) {
//   const store = useStore();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const user = localStorage.getItem("user");

//     if (token && user) {
//       dispatch(userLoggedIn({ accessToken: token, user: user }));
//     }
//   }, []);

//   return <Component {...pageProps} />;
// }

// export default MyApp;
