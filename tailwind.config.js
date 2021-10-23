module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  },
  theme: {
    extend: {
      keyframes: {
        'test': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' }
        },
        'dot': {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'test': 'test 8s ease infinite',
        'dot': 'dot 3s ease infinite'
      }
    }
  }
};
