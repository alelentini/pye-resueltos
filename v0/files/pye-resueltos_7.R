library(ggplot2)
library(latex2exp)


########################################################################################
# TP 7 - Estimación de parámetros
########################################################################################

# E7.4
p  <- seq(from = 0, to = 1, by = 0.001)
s  <- sqrt(p * (1 - p))
df <- data.frame(p, s)
p  <- ggplot(data = df, aes(x = p, y = s)) +
        geom_line() + 
        annotate('text', x = 0.5, y = 0.47, 
                 label = TeX('$\\sigma_{\\hat{p}max}$', output = 'character'), 
                 parse = TRUE,
                 color = 'red') +
        geom_point(data = subset(df, p == 0.5), col = 'red') +
        ylab(TeX('$\\sqrt{n}\\sigma_{\\hat{p}}$')) + 
        theme_classic()
p

