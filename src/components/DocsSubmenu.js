import React from 'react';
import _ from 'lodash';

import {classNames, Link, safePrefix} from '../utils';

export default class DocsSubmenu extends React.Component {
    render() {
        return (
            <ul className="toc-submenu">
            {_.map(_.get(this.props, 'child_pages', null), (child_page, child_page_idx) => (
              <li key={child_page_idx} className={classNames('toc-item', {'current': _.get(this.props, 'page.relativePath', null) === _.get(child_page, 'relativePath', null)})}>
                <Link to={safePrefix(_.get(child_page, 'url', null))}>{_.get(child_page, 'frontmatter.title', null)}</Link>
              </li>
            ))}
            </ul>
        );
    }
}
