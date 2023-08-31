import React from "react"

export const If = ({ teste, children }: { teste: boolean, children: JSX.Element }) => {
  if (teste) {
    return children
  } else {
    return null
  }

}
