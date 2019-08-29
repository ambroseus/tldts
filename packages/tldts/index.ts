import { FLAG, IOptions, IResult, parseImpl } from 'tldts-core';
import suffixLookup from './src/suffix-trie';

export function parse(url: string, options?: Partial<IOptions>): IResult {
  return parseImpl(url, FLAG.ALL, suffixLookup, options);
}

export function getPublicSuffix(
  url: string,
  options?: Partial<IOptions>,
): string | null {
  return parseImpl(url, FLAG.PUBLIC_SUFFIX, suffixLookup, options).publicSuffix;
}

export function getDomain(
  url: string,
  options?: Partial<IOptions>,
): string | null {
  return parseImpl(url, FLAG.DOMAIN, suffixLookup, options).domain;
}

export function getSubdomain(
  url: string,
  options?: Partial<IOptions>,
): string | null {
  return parseImpl(url, FLAG.SUB_DOMAIN, suffixLookup, options).subdomain;
}

export function getHostname(
  url: string,
  options?: Partial<IOptions>,
): string | null {
  return parseImpl(url, FLAG.HOSTNAME, suffixLookup, options).hostname;
}

export function getDomainWithoutSuffix(
  url: string,
  options?: Partial<IOptions>,
): string | null {
  return parseImpl(url, FLAG.ALL, suffixLookup, options).domainWithoutSuffix;
}
