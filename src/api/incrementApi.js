import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://svtinder.local/';
// const baseUrl = 'https://jsonplaceholder.typicode.com/todos/1';

export function getNumber() {
  return fetch(baseUrl + 'number')
    .then(handleResponse)
    .catch(handleError);
}

export function incrementNumber() {
  return fetch(baseUrl + 'increment')
    .then(handleResponse)
    .catch(handleError);
}

export function decrementNumber() {
  return fetch(baseUrl + 'decrement')
    .then(handleResponse)
    .catch(handleError);
}
// export function saveCourse(course) {
//   return fetch(baseUrl + (course.id || ''), {
//     method: course.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(course)
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function deleteCourse(courseId) {
//   return fetch(baseUrl + courseId, { method: 'DELETE' })
//     .then(handleResponse)
//     .catch(handleError);
// }
