import { useEffect, useRef, useState } from "react";

export default function useKey(key, action) {
  useEffect(
    function () {
      function Callback(e) {
        if (e.code === key) {
          action();
        }
      }
      document.addEventListener("keydown", Callback);

      return function () {
        document.removeEventListener("keydown", Callback);
      };
    },
    [key, action]
  );
}
