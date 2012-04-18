#!/usr/bin/env python

import commands
import sys

try:
    import argparse
except ImportError:
    print 'Required Python 2.7 or later.'
    sys.exit(1)


def get_iOS_version(latest=False):
    CMD = 'xcodebuild -showsdks'
    output = commands.getoutput(CMD)
    lines = output.split('\n')
    res = []
    for line in lines:
        if not line.count('iOS'):
            continue
        if not line.count('\t-sdk iphoneos'):
            continue
        versionStr = line.strip().split('\t')[0]
        versionNum = versionStr.split()[-1]
        if versionNum not in res:
            res.append(versionNum)
    res.sort(reverse = True)
    return " ".join(res)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Show SDK version(s).')
    parser.add_argument('platform', metavar='P', type=str,
                        help='platform to show SDK environment. ios/android')
    parser.add_argument('--latest', action='store_true', dest='onlyLatest',
                        default=False, help='show latest version only.')
    args = parser.parse_args()
    if args.platform == 'ios':
        print get_iOS_version(latest=args.onlyLatest)

