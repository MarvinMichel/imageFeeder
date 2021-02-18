function ImagePhoto(srcset, alt, id) {
  return `
    <picture>
      <source 
        media="(min-width: 1600px)"
        srcset=${srcset.regular}
      >
      <img src=${srcset.small} alt="${alt}" class="feed--image__photo" id=${id} loading="lazy" />
    </picture>
  `
}

export default ImagePhoto