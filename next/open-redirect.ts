const isStringQueryParam = (s: string) => s

const openRedirectFunction0 = async (router) => {
    const sanitizedRedirectUrl = isStringQueryParam(router.query.redirect)
          ? router.query.redirect
          : undefined;
        if (sanitizedRedirectUrl) {
          await router.push(sanitizedRedirectUrl);

          return;
        }
}

const openRedirectFunction1 = (router) => {
          router.push(router.query.redirect);
}

const openRedirectFunction2 = (router) => {
    const redirect = router.query.redirect;
    router.push(redirect);
}