const imageElements = images.map(image => {
    return (
      Image(image.urls.regular, image.alt_description, image.user.username)
    )
  }).join('')