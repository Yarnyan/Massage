import React from 'react';
import ErrorBase from '../components/error/Error';

export default function ErrorPage({ code }) {
  const defaultCode = "500";
  const isValidCode = code !== null && Number.isInteger(Number(code)) && code.toString().length >= 3;
  const finalCode = isValidCode ? code.toString() : defaultCode;

  return <ErrorBase code={finalCode} />;
}
