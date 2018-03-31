import { getJSON } from './fetchWrapper';
import { isHashTag } from '../common/validators';

export default function fetchTags(value) {
  if (isHashTag(value)) {
    return getJSON(`/api/twitter?q=${encodeURIComponent(value)}`);
  }
  // TODO: add support for RSS links
  throw Error('Only hastags are supported');
}
