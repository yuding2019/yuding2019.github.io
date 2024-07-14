import stylex from '@stylexjs/stylex';

import {
  FONT_SIZE,
  SPACING,
  THEME_TOKENS,
} from '../../../../styles/variables.stylex';

export const styles = stylex.create({
  wrapper: {
    padding: `${SPACING.xl} ${SPACING.exl}`,
    paddingBottom: 128,
  },
  title: {
    fontSize: 32,
    fontWeight: 100,
    marginBottom: SPACING.xl,
  },
});

export const mdxComponentStyles = stylex.create({
  paragraph: {
    fontSize: 16,
    lineHeight: 2,
    fontWeight: 400,
    color: THEME_TOKENS.primaryTextColor,
    marginBottom: SPACING.md,
    textAlign: 'justify',
    ':hover': {
      color: THEME_TOKENS.primaryTextColorHover,
    },
    ':last-child': {
      marginBottom: 0,
    },
  },

  heading: {
    lineHeight: 2,
    marginTop: SPACING.md,
    color: THEME_TOKENS.primaryTextColorHover,
  },
  heading1: {
    fontSize: FONT_SIZE.heading1,
    fontWeight: 500,
  },
  heading2: {
    fontSize: FONT_SIZE.heading2,
    fontWeight: 500,
  },
  heading3: {
    fontSize: FONT_SIZE.heading3,
    fontWeight: 500,
  },
  heading4: {
    fontSize: FONT_SIZE.heading4,
    fontWeight: 500,
  },
  heading5: {
    fontSize: FONT_SIZE.heading5,
    fontWeight: 500,
  },
  heading6: {
    fontSize: FONT_SIZE.heading6,
    fontWeight: 500,
  },

  anchor: {
    color: '#2563eb',
    display: 'inline',
    textDecoration: 'none',
    ':hover': {
      color: '#1d4ed8',
      textDecoration: 'underline',
    },
  },

  blockquote: {
    backgroundColor: THEME_TOKENS.backgroundColor,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    position: 'relative',
    whiteSpace: 'pre-wrap',
    textAlign: 'justify',
    '::before': {
      position: 'absolute',
      content: '',
      width: 4,
      top: 0,
      left: -4,
      bottom: 0,
      backgroundColor: '#3b82f6',
    },
    ':hover': {
      backgroundColor: THEME_TOKENS.backgroundColorHover,
    },
  },

  pre: {
    fontSize: 13,
    borderRadius: 8,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    position: 'relative',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    overflow: 'auto',
    background: '#f9fafb',
    border: '1px solid #e2e8f0',
  },
  codeLine: {
    fontSize: 13,
    minWidth: 'fit-content',
    whiteSpace: 'pre',
  },
  codeLineOrder: {
    display: 'inline-block',
    width: 22,
    textAlign: 'end',
    marginRight: 6,
    userSelect: 'none',
    paddingRight: 6,
    borderRight: '1px solid #e2e8f0',
    color: THEME_TOKENS.descriptionTextColor,
  },

  image: {
    width: '100%',
    maxWidth: 360,
    display: 'block',
    margin: '0 auto',
    '@media (max-width: 800px)': {
      maxWidth: '100%',
    },
    borderRadius: 6,
    boxShadow: '0 8px 15px -3px #e2e8f0, 0 4px 6px -4px #cbd5e1',
  },

  list: {
    fontSize: 16,
    lineHeight: 1.5,
    marginBottom: SPACING.md,
    padding: SPACING.md,
    borderRadius: 8,
    border: '1px solid #e2e8f0',
    color: THEME_TOKENS.primaryTextColor,
  },
  listItem: {
    marginBottom: SPACING.sm,
    paddingLeft: SPACING.sm,
    position: 'relative',
    display: 'flex',
    transition: 'all 0.15s',
    ':last-child': {
      marginBottom: 0,
    },
    ':hover': {
      color: THEME_TOKENS.primaryTextColorHover,
    },
  },
  listItemOrder: {
    display: 'inline-flex',
    alignItems: 'center',
    width: 18,
    height: 24,
    flexShrink: 0,
    alignSelf: 'start',
    '::before': {
      content: '',
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
    },
  },
});
