/* global imagesLoaded */

// Modules
import { setActiveTab } from '../modules/setActiveTab.js'
import { resizeInstance } from '../modules/resizeGridItems.js'
import { removeContent } from '../modules/removeContent.js'

// Components
import LoadingElement from '../components/atoms/LoadingElement.js'

// Elements
const contentContainer = document.getElementById('content')
const loading = LoadingElement()

// Client-side router
class Router {
  constructor(routes) {
    this.routes = routes
    this._loadInitialRoute()
  }

  loadRoute(...urlSegments) {
    /**
     * Add loading state to page
     * Render feed content based on url
     * Provide active class to corresponding tab
     * Resize grid when images are fully loaded
     */
    removeContent(contentContainer)
    contentContainer.insertAdjacentHTML('beforeend', loading)

    const matchedRoute = this._matchUrlToRoute(urlSegments)

    const url = `/${urlSegments.join('/')}`
    history.pushState({}, '', url)

    matchedRoute.render(matchedRoute.params)
      .then(renderData => {
        removeContent(contentContainer)
        contentContainer.appendChild(renderData)
      }).finally(() => {
        setActiveTab(urlSegments[0])
        const gridCells = document.querySelectorAll('.feed > div')
        gridCells.forEach((gridCell) => imagesLoaded(gridCell, resizeInstance))
      })
  }

  _matchUrlToRoute(urlSegments) {
    /**
     * Check if @param urlSegments matches route path
     * Check if route path is parameterised trough @param routePathSegments
     * Returns mathed route and optional parameters
     */
    const routeParams = {}

    const matchedRoute = this.routes.find(route => {
      const routePathSegments = route.path.split('/').slice(1)

      if (routePathSegments.length !== urlSegments.length) return false

      const match = routePathSegments.every((routePathSegment, i) => {
        return routePathSegment === urlSegments[i] || routePathSegment[0] === ':'
      })

      if (match) {
        routePathSegments.forEach((segment, i) => {
          if (segment[0] === ':') {
            const propName = segment.slice(1)
            routeParams[propName] = decodeURIComponent(urlSegments[i])
          }
        })
      }
      return match
    })
    return { ...matchedRoute, params: routeParams }
  }

  _loadInitialRoute() {
    /**
     * Load correct route on first render
     * Splits baseURL and pathname with @param pathnameSplit
     * Slices baseURL and returns pathname as array with @param pathSegments
     */
    const pathnameSplit = window.location.pathname.split('/')
    const pathSegments = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : ''

    this.loadRoute(...pathSegments)
  }
}

export default Router