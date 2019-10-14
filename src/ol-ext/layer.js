import BaseLayer from 'ol/layer/Base'
import uuid from 'uuid/v4'
import { hasProp } from '../util/minilo'

export function getLayerId (layer) {
  if (layer instanceof BaseLayer) {
    return layer.get('id')
  } else if (hasProp(layer, 'id')) {
    return layer.id
  }

  throw new Error('Illegal layer argument')
}

export function setLayerId (layer, layerId) {
  if (layer instanceof BaseLayer) {
    layer.set('id', layerId)

    return layer
  } else if (hasProp(layer, 'id')) {
    layer.id = layerId

    return layer
  }

  throw new Error('Illegal layer argument')
}

export function initializeLayer (layer, defaultLayerId) {
  if (getLayerId(layer) == null) {
    setLayerId(layer, defaultLayerId || uuid())
  }

  return layer
}
