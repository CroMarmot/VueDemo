export default function({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.counter !== 0) {
    return redirect('/login')
  }
}
