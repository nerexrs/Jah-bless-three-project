// Clase que escucha eventos del teclado y mantiene el estado de las teclas
class KeyListener {
    
    /**
     * Constructor - se ejecuta al crear una nueva instancia
     * @param {Function} caster - Función que se llamará cuando cambie el estado de una tecla
     */
    constructor(caster) {
        // Objeto para almacenar el estado de todas las teclas
        // Ejemplo: { 13: true, 32: false } (13=Enter presionado, 32=Espacio no presionado)
        this.keys = {}
        
        // Guarda la función que se llamará cuando una tecla cambie de estado
        // Si no se proporciona caster, usa console.log por defecto
        this.caster = caster || console.log
    }

    /**
     * Cambia la función que se llama cuando cambia el estado de las teclas
     * @param {Function} caster - Nueva función para notificar cambios
     */
    setCaster(caster) {
        this.caster = caster
    }

    /**
     * Se ejecuta cuando el usuario presiona una tecla (keydown)
     * @param {KeyboardEvent} e - Evento del teclado
     */
    down(e) {
        // Si la tecla ya está marcada como presionada, no hacer nada
        // Esto evita múltiples eventos mientras mantienes la tecla presionada
        if (this.keys[e.keyCode]) return
        
        // Marca la tecla como presionada (true)
        this.keys[e.keyCode] = true
        
        // Notifica que la tecla cambió a presionada
        // Envía un array con: [código de tecla, nuevo estado, objeto completo de teclas]
        this.caster([e.keyCode, true, this.keys])
        
        // Evita el comportamiento predeterminado del navegador para esa tecla
        // Por ejemplo, si es Enter, evita que envíe un formulario
        e.preventDefault()
        
        // Detiene la propagación del evento a otros elementos
        // El evento no llegará a elementos padre
        e.stopPropagation()
    }

    /**
     * Verifica si una tecla específica está presionada
     * @param {number} keyCode - Código numérico de la tecla (ej: 13 para Enter)
     * @returns {boolean} - true si está presionada, false si no
     */
    isPressed(keyCode) {
        // Si existe la tecla en el objeto keys, devuelve su valor (true/false)
        // Si no existe, devuelve false
        return (this.keys[keyCode]) ? this.keys[keyCode] : false
    }

    /**
     * Se ejecuta cuando el usuario suelta una tecla (keyup)
     * @param {KeyboardEvent} e - Evento del teclado
     */
    up(e) {
        // Marca la tecla como no presionada (false)
        this.keys[e.keyCode] = false

        // Notifica que la tecla cambió a no presionada
        // Envía un array con: [código de tecla, nuevo estado, objeto completo de teclas]
        this.caster([e.keyCode, false, this.keys])
        
        // Evita el comportamiento predeterminado del navegador para esa tecla
        e.preventDefault()
        
        // Detiene la propagación del evento a otros elementos
        e.stopPropagation()
    }

    /**
     * Comienza a escuchar los eventos del teclado
     * Debes llamar a esta función para activar el listener
     */
    start() {
        // Agrega event listener para tecla presionada
        // .bind(this) asegura que dentro de down(), 'this' se refiera a la clase
        window.addEventListener('keydown', this.down.bind(this))
        
        // Agrega event listener para tecla soltada
        window.addEventListener('keyup', this.up.bind(this))
    }

    /**
     * Deja de escuchar los eventos del teclado
     * Importante para limpiar recursos cuando ya no necesitas el listener
     */
    stop() {
        // Elimina los event listeners previamente agregados
        window.removeEventListener('keydown', this.down.bind(this))
        window.removeEventListener('keyup', this.up.bind(this))
    }
}

// Crea una instancia única del KeyListener (patrón singleton)
// Se usa sin caster, por lo que usará console.log por defecto
const keyListener = new KeyListener()

// Exporta la instancia para usarla en otros archivos
export default keyListener