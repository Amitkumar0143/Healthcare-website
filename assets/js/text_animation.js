particlesJS("particles-js", {
    'particles': {
       'number': {
         'value': 80,
         'density': {
           'enable': true,
           'value_area':800
         }
       },
       'color': {
         'value': ['#aa73ff', '#5ABB35', '#83d238', '#33b1f8']
       },
       'shape': {
         'type': ['circle'],
         'stroke': {
           'width':1,
           'color': '#222222'
         },
   
         'polygon': {
           'nb_sides': 5
         },
     
       },
       'opacity': {
         'value': 0.75,
         'random': false,
         'anim': {
           'enable': false,
           'speed': 3,
           'opacity_min': 0.25,
           'sync': false
         }
       },
       'size': {
         'value': 10,
         'random': true,
         'anim': {
           'enable': false,
           'speed': 80,
           'size_min': 0.25,
           'sync': false
         }
       },
       'line_linked': {
         'enable': true,
         'distance': 500,
         'color': '#cccccc',
         'opacity': 0.5,
         'width': 1.5
       },
       'move': {
         'enable': true,
         'speed': 10,
         'direction': 'none',
         'random': false,
         'straight': false,
         'out_mode': 'out',
         'bounce': false,
         'attract': {
           'enable': false,
           'rotateX': 600,
           'rotateY': 1200
         },
         }
     },
    'interactivity': {
       'detect_on': 'canvas',
       'events': {
         'onhover': {
           'enable': false,
           'mode': ['', '', '']
         },
         'onclick': {
           'enable': true,
           'mode': ['', '', '', 'repulse']
         },
         'resize': true
       },
       'modes': {
         'grab': {
           'distance': 800,
           'line_linked': {
             'opacity': 1
           }
         },
         'bubble': {
           'distance': 800,
           'size': 80,
           'duration': 2,
           'opacity': 0.5,
           'speed': 3
         },
         'repulse': {
           'distance': 800,
           'duration': 0.4
         },
         'push': {
           'particles_nb': 4
         },
         'remove': {
           'particles_nb': 2
         }
       }
     },
    'retina_detect': true
   });