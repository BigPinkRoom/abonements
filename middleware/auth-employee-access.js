export default async function ({ $services, $auth, $showError, redirect }) {
  let user = null;

  if (process.server) {
    user = await $services.auth.getCurrentUser();
    console.log('server user', user);
  } else {
    user = $auth.$storage.getUniversal('user');
  }

  if (!user) {
    $showError('Access denied');

    redirect('/login');
  }
}
