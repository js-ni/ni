import React, {useState, useEffect} from 'react';

const RSS2Json_ENDPOINT = 'https://api.rss2json.com/v1/api.json';

/**
 * Transform a HTML content into plain text.
 *
 * @param {String} htmlSource HTML Content to transform
 * @returns {String} Plain text representation of htmlSource
 */
const htmlToText = function htmlToText(htmlSource) {
  const doc = new DOMParser().parseFromString(htmlSource, 'text/html');
  let plain = doc.body.textContent || '';

  // Remove URLs leaved by DOMParser
  plain = plain.replace(/https?:\/\/.*?\/[a-z0-9/#:?&_-]*/g, '');
  return plain;
};

/** 
 Effect to retrieve a RSS feed as an array of objects.
 Each object correspond to a publication present in the feed.

 The RSS is transformed to a JSON response using the rss2json.com service
 */
export const usePosts = function usePosts(RSSUrl) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const requestUrl = `${RSS2Json_ENDPOINT}?rss_url=${encodeURIComponent(
      RSSUrl
    )}`;

    fetch(requestUrl)
      .then(r => r.json())
      .then(data => {
        setPosts(data.items);
        setLoading(false);
      });
  }, [RSSUrl]);

  return [loading, posts];
};
